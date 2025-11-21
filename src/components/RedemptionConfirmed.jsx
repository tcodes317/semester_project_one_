function RedemptionConfirm() {
  return (
    <>
      <div className="relative">
        <div className="w-[100%] h-[100vh] flex items-center justify-center bg-[#0A064033]">
          <div className="flex items-center hiddn px-4 justify-center">
            <div className="bg-[#fff] border-1  rounded-2xl relative p-18">
              <i className="fa fa-times absolute right-5 top-5"></i>
              <div className="space-y-4">
                <img src="src/assets/Frameddd.png" className="mx-auto" alt="" />
                <h1 className="text-xl font-bold text-center">
                  Redemption Confirmed
                </h1>
              </div>
              <div className="mt-4">
                <p className="md:w-[420px] text-center mx-auto">
                  Your reward redemption is being processed. You'll receives
                  update once it's ready.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default RedemptionConfirm;
