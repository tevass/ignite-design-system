import type { Meta, StoryObj } from '@storybook/react'

import { Avatar, AvatarProps } from '@ignite-ui/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/EST3V4O.png',
    alt: 'Estevão Gabriel',
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WihFallBack: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
