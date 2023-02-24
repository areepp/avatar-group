import Avatar from './Avatar'
import PEOPLE from '@/data/people.json'

interface Props {
  size: 'xs' | 'sm' | 'md' | 'lg'
  maxLength: number
}

const AvatarGroup = ({ size, maxLength }: Props) => {
  const showedPeople = PEOPLE.slice(0, maxLength)
  const remainingPeople = PEOPLE.length - showedPeople.length

  if (!showedPeople) return null

  return (
    <div className="flex -space-x-3">
      {showedPeople.map((person) => (
        <Avatar size={size} data={person} key={person.id} />
      ))}
      {remainingPeople > 0 && <Avatar size={size} data={remainingPeople} />}
    </div>
  )
}

export default AvatarGroup
