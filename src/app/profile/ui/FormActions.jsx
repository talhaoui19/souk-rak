"use client";

const FormActions = ({ isLoading = false, isDeleting = false, onDelete }) => {
  return (
    <div className="mt-10 flex items-center gap-4">
      <button type="submit" className="--but">
        {isLoading ? <div className="--spr"></div> : "حفظ التعديلات"}
      </button>

      <button type="button" onClick={onDelete} className="--but bg-[#FF4242]">
        {isDeleting ? <div className="--spr"></div> : "حذف الحساب"}
      </button>
    </div>
  );
};

export default FormActions;
