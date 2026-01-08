// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import QRCodeSVG from "@/components/icons/QRCodeSVG";
import { useState } from "react";
import DialogLayout from "@/components/DialogLayout";

const QRCode = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="fixed right-8 bottom-24 hidden cursor-pointer lg:block"
        onClick={() => setIsOpen(true)}
      >
        <p className="text-muted-foreground mb-3 text-right text-sm">
          Quét để tải ứng dụng
        </p>
        <QRCodeSVG className="h-32 w-32" />
      </motion.div>

      <DialogLayout
        open={isOpen}
        onOpenChange={setIsOpen}
        showCloseButton={true}
        closeOnOverlayClick={true}
      >
        <div className="bg-background rounded-2xl p-6 shadow-2xl">
          <QRCodeSVG className="h-64 w-64" />
        </div>

        <p className="text-foreground mt-4 text-center text-lg font-medium">
          Quét mã QR để tải ứng dụng
        </p>
      </DialogLayout>
    </>
  );
};

export default QRCode;
