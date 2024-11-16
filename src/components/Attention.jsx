export default function Attention({ isAttention, setIsAttention }) {
  function handleAttention() {
    setIsAttention((prev) => !prev);
  }
  return (
    <div className={isAttention ? "page__attention-wrapper" : "disabled"}>
      <div className="page__attention text-uppercase">
        Attention! THIS SITE IS FOR VIEWING ONLY. NOT FOR SHOPPING.
      </div>
      <div className="page__attention-close" onClick={handleAttention}></div>
    </div>
  );
}
