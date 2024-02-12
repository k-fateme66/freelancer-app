import TextField from "../../ui/TextField";
import Loader from "../../ui/Loader";

function SendOTPForm({ isSendingOtp, onSubmit, register }) {
  return (
    <form className="space-y-8" onSubmit={onSubmit}>
      <TextField
        name="phoneNumber"
        lable="شماره موبایل"
        register={register}
        requierd
      />
      {isSendingOtp ? (
        <Loader />
      ) : (
        <button type="submit" className="btn btn--primary w-full">
          ارسال کد تایید
        </button>
      )}
    </form>
  );
}

export default SendOTPForm;
