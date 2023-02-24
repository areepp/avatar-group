import { render, screen } from '@testing-library/react'
import AvatarGroup from '../AvatarGroup'
import '@testing-library/jest-dom'

// MOCK DATA
// [
//   {
//     "id": 1,
//     "name": "Tomi Budi",
//     "initial": "TM",
//     "imageSrc": "/profile-picture.jpg"
//   },
//   {
//     "id": 2,
//     "name": "Cahya",
//     "initial": "CH",
//     "imageSrc": ""
//   },
//   {
//     "id": 3,
//     "name": "Sri Mulyani",
//     "initial": "SM",
//     "imageSrc": "/profile-picture.jpg"
//   }
// ]

describe('AvatarGroup', () => {
  it('renders properly', () => {
    const { container } = render(<AvatarGroup maxLength={2} size="xs" />)

    expect(container).toMatchSnapshot()
  })

  it('shows avatar image or initial name', () => {
    render(<AvatarGroup maxLength={3} size="xs" />)

    expect(screen.getAllByRole('img')).toHaveLength(2)
    expect(screen.getByText('CH')).toBeInTheDocument()
  })

  it('shows +1 when the maxLength is 2', () => {
    render(<AvatarGroup maxLength={2} size="xs" />)

    expect(screen.getByText('+1')).toBeInTheDocument()
  })
})
