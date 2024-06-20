import Icon from "../../../common/Icon";
import useModal from "../../../hooks/useModal";

export default function AddPlaintiffModal() {
  const modal = useModal();

  return (
    <div className="bg-background p-4 flex flex-col min-w-[30vw] gap-y-4 relative">
      <button onClick={() => modal.hide()} className="absolute top-2 right-2">
        <Icon
          icon="close"
          className="text-[1.5rem] text-red-500 border rounded-full p-1 border-red-500 hover:cursor-pointer"
        />
      </button>
      <h1 className="font-bold text-xl">Add Evidence </h1>
      <div className="">
        <p>Evidence title</p>
        <input
          type="text"
          placeholder="Title"
          className="bg-background border border-white/20 p-2 w-full"
        />
      </div>
      <div>
        <p>Evidence Link</p>
        <input
          placeholder="More details"
          className="bg-background border border-white/20 p-2 w-full"
        />
      </div>
      <button className="text-sm bg-primary font-bold py-1 w-max px-4 self-center text-back">
        Add Evidence
      </button>
    </div>
  );
}
