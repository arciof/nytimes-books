import { ComponentStory, ComponentMeta } from '@storybook/react'
import Book from './Book'

export default {
    title: 'Book',
    component: Book,
} as ComponentMeta<typeof Book>

const Template: ComponentStory<typeof Book> = (args) => <Book {...args} />

export const Primary = Template.bind({})
Primary.args = {
    book: {
        age_group: '',
        amazon_product_url:
            'http://www.amazon.com/The-Body-Keeps-Score-Healing/dp/0670785938?tag=NYTBSREV-20',
        article_chapter_link: '',
        author: 'Bessel van der Kolk',
        book_image:
            'https://storage.googleapis.com/du-prd/books/images/9780670785933.jpg',
        book_image_width: 128,
        book_image_height: 193,
        book_review_link:
            'https://www.nytimes.com/2018/10/18/books/review/how-to-rewire-your-traumatized-brain.html',
        book_uri: 'nyt://book/e3e33e9d-0e67-5fec-b0d2-2ecddc38ce0e',
        contributor: 'by Bessel van der Kolk',
        contributor_note: '',
        created_date: '2023-02-22 23:05:30',
        description:
            'How trauma affects the body and mind, and innovative treatments for recovery.',
        first_chapter_link: '',
        price: '0.00',
        primary_isbn10: '0143127748',
        primary_isbn13: '9780143127741',
        publisher: 'Penguin',
        rank: 2,
        rank_last_week: 2,
        sunday_review_link: '',
        title: 'THE BODY KEEPS THE SCORE',
        updated_date: '2023-02-22 23:10:23',
        weeks_on_list: 130,
        buy_links: [],
    },
}
