import * as S from "./styles";

export default function CTAButton({
  disabled,
  className,
  children,
  ariaLabel,
  name,
  onClick = () => {},
}) {
  return (
    <S.CTAButton
      disabled={disabled}
      aria-label={ariaLabel}
      className={className}
      name={name}
      onClick={onClick}
    >
      {children}
    </S.CTAButton>
  );
}
