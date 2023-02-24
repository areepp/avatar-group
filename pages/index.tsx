import AvatarGroup from '@/components/AvatarGroup/AvatarGroup'

const Home = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-stone-400">
      <AvatarGroup size="xs" maxLength={2} />
    </div>
  )
}

export default Home
