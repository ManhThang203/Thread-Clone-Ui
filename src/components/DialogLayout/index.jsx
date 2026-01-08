import {
  Dialog,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
} from "@/components/ui/dialog";
import * as DialogPrimitive from "@radix-ui/react-dialog";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { X } from "lucide-react";
import PropTypes from "prop-types";

function DialogLayout({
  open,
  onOpenChange,
  children,
  showCloseButton = true,
  closeButtonPosition = "left",
  motionProps,
  contentClassName = "",
  closeOnOverlayClick = true,
}) {
  const getCloseButtonClass = () => {
    const baseClass =
      "bg-background/80 hover:bg-background fixed rounded-full p-2 transition-colors cursor-pointer";

    switch (closeButtonPosition) {
      case "right":
        return `${baseClass} top-0 -right-16`;
      case "top-left":
        return `${baseClass} -top-12 left-0`;
      case "top-right":
        return `${baseClass} -top-12 right-0`;
      case "left":
        return `${baseClass} top-10 left-10`;
      default:
        return `${baseClass} top-0 -left-16`;
    }
  };

  const defaultMotionProps = {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.9 },
    transition: { duration: 0.2 },
  };

  const finalMotionProps = { ...defaultMotionProps, ...motionProps };

  const handleOverlayClick = () => {
    if (closeOnOverlayClick) {
      onOpenChange(false);
    }
  };

  const handleContentClick = (e) => {
    // Ngăn sự kiện click lan ra overlay
    e.stopPropagation();
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogPortal>
        <DialogOverlay />

        {/* Thêm onClick vào Content và wrapper overlay tự tạo */}
        <DialogPrimitive.Content
          className="fixed inset-0 z-50 flex items-center justify-center"
          onClick={handleOverlayClick}
        >
          {/* Lớp backdrop blur - đây mới là overlay thật sự */}
          <div className="absolute inset-0 bg-white/10 backdrop-blur-xl" />

          {/* Nội dung dialog */}
          <motion.div
            {...finalMotionProps}
            className={`relative z-10 flex flex-col items-center ${contentClassName}`}
            onClick={handleContentClick}
          >
            {showCloseButton && (
              <button
                onClick={() => onOpenChange(false)}
                className={getCloseButtonClass()}
                aria-label="Đóng"
              >
                <X className="text-foreground h-6 w-6" />
              </button>
            )}
            <DialogTitle>{children}</DialogTitle>
          </motion.div>
        </DialogPrimitive.Content>
      </DialogPortal>
    </Dialog>
  );
}

DialogLayout.propTypes = {
  open: PropTypes.bool.isRequired, // Trạng thái mở/đóng dialog
  onOpenChange: PropTypes.func.isRequired, // Callback khi thay đổi trạng thái
  children: PropTypes.node.isRequired, // Nội dung bên trong dialog
  showCloseButton: PropTypes.bool, // Hiển thị nút đóng (mặc định: true)
  closeButtonPosition: PropTypes.oneOf([
    "left",
    "right",
    "top-left",
    "top-right",
  ]), // Vị trí nút đóng: 'left' | 'right' | 'top-left' | 'top-right' (mặc định: 'left')
  motionProps: PropTypes.object, // Tùy chỉnh animation (optional)
  contentClassName: PropTypes.string, // Class CSS cho content wrapper
};

export default DialogLayout;
