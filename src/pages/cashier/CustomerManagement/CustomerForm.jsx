import React from "react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogFooter,
  AlertDialogCancel,
} from "@/components/ui/alert-dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

const CustomerForm = ({ showCustomerFrom, setShowCustomerFrom }) => {
  const handleSave = () => {
    // TODO: Add save logic (API call or local state)
    setShowCustomerFrom(false);
  };

  return (
    <AlertDialog open={showCustomerFrom} onOpenChange={setShowCustomerFrom}>
      <AlertDialogContent className="max-w-md rounded-2xl">
        {/* Header with title left, close button right */}
        <div className="flex items-center justify-between border-b pb-2">
          <AlertDialogHeader className="p-0">
            <AlertDialogTitle className="text-lg font-bold">
              Nouvo Kliyan
            </AlertDialogTitle>
          </AlertDialogHeader>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setShowCustomerFrom(false)}
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Form Inputs */}
        <div className="flex flex-col gap-4 mt-4">
          <Input placeholder="Non Kliyan" />
          <Input placeholder="Imel (opsyonèl)" />
          <Input placeholder="Nimewo Telefòn" />
        </div>

        {/* Footer Buttons */}
        <AlertDialogFooter className="mt-6 flex justify-end gap-2">
          <AlertDialogCancel
            onClick={() => setShowCustomerFrom(false)}
            className="w-full sm:w-auto"
          >
            Anile
          </AlertDialogCancel>
          <Button className="w-full sm:w-auto" onClick={handleSave}>
            Ajoute Kliyan
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default CustomerForm;
