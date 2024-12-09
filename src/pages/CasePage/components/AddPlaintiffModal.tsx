import Icon from "../../../common/Icon";
import useModal from "../../../hooks/useModal";
export default function AddPlaintiffModal() {
  const modal = useModal();
  return (
    <div className="bg-background px-6 py-8 flex flex-col min-w-[35vw] gap-y-4 relative rounded-md border border-white/10">
      <button onClick={() => modal.hide()} className="absolute top-2 right-2">
        <Icon
          icon="close"
          className="text-[1.5rem] text-red-500 border rounded-full p-1 border-red-500 hover:cursor-pointer"
        />
      </button>
      <div className="">
        <p className="text-sm">Evidence title</p>
        <input
          type="text"
          placeholder="Title"
          className="bg-background border border-white/10 p-2 w-full rounded-md"
        />
      </div>
      <div>
        <p className="text-sm">Evidence Link</p>
        <input
          placeholder="More details"
          className="bg-background border border-white/10 p-2 w-full rounded-md"
        />
      </div>
      <button className="text-sm bg-primary font-semibold py-1 w-max px-4 self-center text-back">
        Add Evidence
      </button>
    </div>
  );
}