import TextField from "../../ui/TextField";
import Loader from "../../ui/Loader";

function SendOTPForm({ isSendingOtp, phoneNumber, onChange, onSendOtp }) {
  return (
    <form className="space-y-8" onSubmit={onSendOtp}>
      <TextField
        name="phoneNumber"
        value={phoneNumber}
        lable="شماره موبایل"
        onChange={onChange}
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
