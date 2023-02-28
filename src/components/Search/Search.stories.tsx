import { ComponentStory, ComponentMeta } from '@storybook/react'
import Search from './Search'

export default {
    title: 'Search',
    component: Search,
} as ComponentMeta<typeof Search>

const Template: ComponentStory<typeof Search> = (args) => <Search {...args} />

export const Primary = Template.bind({})
Primary.args = {
    onChangeCb: (value: string) => console.log(value),
}
