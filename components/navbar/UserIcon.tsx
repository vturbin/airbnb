import { fetchProfileImage } from "@/utils/actions";
import { LuUser } from "react-icons/lu";

async function UserIcon() {
  const profileImage = await fetchProfileImage();
  if (profileImage) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={profileImage} className="w-6 h-6 rounded-full" alt=''></img>
  }
  return (
    <LuUser className='w-6 h-6 bg-primary rounded-full text-white' />
  )
}

export default UserIcon