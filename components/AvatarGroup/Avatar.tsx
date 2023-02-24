import Image from 'next/image'
import classNames from 'classnames'

interface IPerson {
  id: number
  name: string
  initial: string
  imageSrc: string
}

interface Props {
  size: 'xs' | 'sm' | 'md' | 'lg'
  data: IPerson | number
}

const Avatar = ({ size, data }: Props) => {
  let children
  if (typeof data === 'object') {
    // render avatar image or the initial name if there is no image present
    children =
      data.imageSrc !== '' ? (
        <Image src={data.imageSrc} fill alt={data.name} />
      ) : (
        data.initial
      )
  } else {
    // render the number of remaining people
    children = `+${data}`
  }

  return (
    <div
      className={classNames(
        size === 'xs' && 'w-avatar-xs h-avatar-xs',
        size === 'sm' && 'w-avatar-sm h-avatar-sm',
        size === 'md' && 'w-avatar-md h-avatar-md',
        size === 'lg' && 'w-avatar-lg h-avatar-lg',
        'relative flex items-center justify-center bg-neutral-grey text-neutral-black rounded-full overflow-hidden border border-white',
      )}
    >
      {children}
    </div>
  )
}

export default Avatar
