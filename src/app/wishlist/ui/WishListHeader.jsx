const WishListHeader = () => {
  return (
    <div className="cart_header container">
      <div className="flex items-center justify-between">
        <h2 className="text-[var(--main-color)] text-4xl font-black">
          قائمة المفضلة
        </h2>
        <button className="--but flex items-center justify-center gap-2 w-[184px] bg-transparent text-[var(--main-color)] border-[1px] border-[var(--main-color)]">
          استكمال التسوق
          <div>
            <svg
              width="22"
              height="23"
              viewBox="0 0 22 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M13.0503 16.34C13.3915 15.9968 13.3915 15.4425 13.0503 15.0992L9.93506 11.94L13.0503 8.82483C13.3915 8.4816 13.3915 7.92727 13.0503 7.58403C12.885 7.41744 12.6601 7.32373 12.4255 7.32373C12.1908 7.32373 11.9659 7.41744 11.8007 7.58403L8.06946 11.3152C7.90286 11.4805 7.80915 11.7054 7.80915 11.94C7.80915 12.1747 7.90286 12.3996 8.06946 12.5648L11.8007 16.34C11.9659 16.5066 12.1908 16.6003 12.4255 16.6003C12.6601 16.6003 12.885 16.5066 13.0503 16.34Z"
                fill="#26B356"
              />
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
};

export default WishListHeader;
