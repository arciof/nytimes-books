import { ComponentStory, ComponentMeta } from '@storybook/react'
import Book from './Book'

export default {
    title: 'Book',
    component: Book,
} as ComponentMeta<typeof Book>

const Template: ComponentStory<typeof Book> = (args) => <Book {...args} />

export const Primary = Template.bind({})
Primary.args = {
    imageURL:
        'https://storage.googleapis.com/du-prd/books/images/9781668001226.jpg',
    author: 'Colleen Hoover',
    title: 'IT STARTS WITH US',
}
