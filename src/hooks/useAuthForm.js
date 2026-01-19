import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router";
import { useForm } from "react-hook-form";
import { useCurrentUser } from "@/features/auth";
import { toast } from "sonner";

export const useAuthForm = ({
  defaultValues = {},
  onSubmitHandler,
  toastMessages = {},
  focusField = null,
}) => {
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const currentUser = useCurrentUser();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
    setFocus,
    reset,
  } = useForm({ defaultValues });

  // Auto focus vào field đầu tiên
  useEffect(() => {
    if (focusField) {
      setFocus(focusField);
    }
  }, [setFocus, focusField]);

  // Redirect nếu đã login
  useEffect(() => {
    if (currentUser) {
      const continuePath = params.get("continue") || "/";
      navigate(continuePath);
    }
  }, [currentUser, navigate, params]);

  // Xử lý lỗi validation
  const onError = (errors) => {
    const firstError = Object.keys(errors)[0];
    toast.error(errors[firstError].message);
  };

  // Xử lý submit với toast
  const onSubmit = async (data) => {
    const submitPromise = onSubmitHandler(data);

    toast.promise(submitPromise, {
      loading: toastMessages.loading || "Đang xử lý...",
      success: toastMessages.success || "Thành công!",
      error: toastMessages.error || "Có lỗi xảy ra. Vui lòng thử lại.",
    });

    try {
      await submitPromise;
    } catch (error) {
      console.error("Auth form error:", error);
    }
  };

  return {
    register,
    handleSubmit,
    watch,
    errors,
    isSubmitting,
    onError,
    onSubmit,
    reset,
  };
};
