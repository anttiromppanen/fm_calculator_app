type Props = {
  showWhen: boolean;
};

function ErrorMessage({ showWhen }: Props) {
  return (
    <p
      className={`text-userErrorOrange invisible mt-2 ${
        showWhen && "!visible"
      }`}
    >
      Only positive values allowed
    </p>
  );
}

export default ErrorMessage;
