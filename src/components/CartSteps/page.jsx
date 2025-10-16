import { GreyArrowIcon, ShoppingArrowIcon } from "../icons";

export default function CartSteps({ currentStep, cartItems }) {
  const steps = [
    { id: 1, label: "السلة" },
    { id: 2, label: "معلومات الشحن" },
    { id: 3, label: "الدفع" },
  ];

  return (
    <div className="cart_header container">
      <div className="flex items-center justify-between">
        <h2 className="text-[var(--main-color)] text-4xl font-black">
          سلة التسوق
        </h2>
        <button className="--but flex items-center justify-center gap-2 w-[184px] bg-transparent text-[var(--main-color)] border border-[var(--main-color)]">
          استكمال التسوق
          <ShoppingArrowIcon />
        </button>
      </div>

      {cartItems?.length > 0 && (
        <div className="flex items-center gap-3 border border-[#F4F6F8] px-[25px] mt-6 h-[56px] rounded-[8px]">
          {steps.map((step, index) => {
            const isActive = step.id === currentStep;
            const isCompleted = step.id < currentStep;

            return (
              <div key={step.id} className="flex items-center gap-2">
                <span
                  className={`w-[20px] h-[20px] rounded-full text-white text-xs flex items-center justify-center ${
                    isActive || isCompleted
                      ? "bg-[var(--main-color)]"
                      : "bg-[#c4cdd5]"
                  }`}
                >
                  {step.id}
                </span>
                <span
                  className={`text-[16px] font-semibold ${
                    isActive || isCompleted
                      ? "text-[var(--main-color)]"
                      : "text-[#959EAD]"
                  }`}
                >
                  {step.label}
                </span>

                {index < steps.length - 1 && <GreyArrowIcon />}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
