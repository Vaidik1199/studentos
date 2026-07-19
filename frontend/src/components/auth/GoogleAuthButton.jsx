import { GoogleLogin } from "@react-oauth/google";

function GoogleAuthButton({ onSuccess, onError }) {
  return (
    <div className="space-y-5">
      <div className="flex justify-center overflow-hidden">
        <GoogleLogin
          onSuccess={onSuccess}
          onError={onError}
          theme="filled_black"
          shape="pill"
          size="large"
          text="continue_with"
          width="280"
        />
      </div>

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-slate-700" />
        </div>

        <div className="relative flex justify-center">
          <span className="bg-slate-900 px-4 text-sm text-slate-500">
            OR CONTINUE WITH EMAIL
          </span>
        </div>
      </div>
    </div>
  );
}

export default GoogleAuthButton;