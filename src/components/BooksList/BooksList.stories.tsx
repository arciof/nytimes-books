import { ComponentStory, ComponentMeta } from '@storybook/react'
import Book from '../Book/Book'
import BooksList from './BooksList'

const books = [
    {
        age_group: '',
        amazon_product_url:
            'https://www.amazon.com/dp/1668001225?tag=NYTBSREV-20',
        article_chapter_link: '',
        author: 'Colleen Hoover',
        book_image:
            'https://storage.googleapis.com/du-prd/books/images/9781668001226.jpg',
        book_image_width: 322,
        book_image_height: 500,
        book_review_link: '',
        book_uri: 'nyt://book/3aa85e47-4df9-53ef-9957-a77753d3502c',
        contributor: 'by Colleen Hoover',
        contributor_note: '',
        created_date: '2023-02-22 23:05:29',
        description:
            'In the sequel to “It Ends With Us,” Lily deals with her jealous ex-husband as she reconnects with her first boyfriend.',
        first_chapter_link: '',
        price: '0.00',
        primary_isbn10: '1668001225',
        primary_isbn13: '9781668001226',
        publisher: 'Atria',
        rank: 1,
        rank_last_week: 3,
        sunday_review_link: '',
        title: 'IT STARTS WITH US',
        updated_date: '2023-02-22 23:10:22',
        weeks_on_list: 18,
        buy_links: [
            {
                name: 'Amazon',
                url: 'https://www.amazon.com/dp/1668001225?tag=NYTBSREV-20',
            },
            {
                name: 'Apple Books',
                url: 'https://goto.applebooks.apple/9781668001226?at=10lIEQ',
            },
            {
                name: 'Barnes and Noble',
                url: 'https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781668001226',
            },
            {
                name: 'Books-A-Million',
                url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FIT%252BSTARTS%252BWITH%252BUS%252FColleen%252BHoover%252F9781668001226&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DIT%252BSTARTS%252BWITH%252BUS%252BColleen%252BHoover',
            },
            {
                name: 'Bookshop',
                url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9781668001226&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DIT%2BSTARTS%2BWITH%2BUS',
            },
            {
                name: 'IndieBound',
                url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9781668001226%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DIT%2BSTARTS%2BWITH%2BUS%2BColleen%2BHoover%26aff%3DNYT',
            },
        ],
    },
    {
        age_group: '',
        amazon_product_url:
            'http://www.amazon.com/Ends-Us-Novel-Colleen-Hoover-ebook/dp/B0176M3U10?tag=NYTBSREV-20',
        article_chapter_link: '',
        author: 'Colleen Hoover',
        book_image:
            'https://storage.googleapis.com/du-prd/books/images/9781501110375.jpg',
        book_image_width: 319,
        book_image_height: 495,
        book_review_link: '',
        book_uri: 'nyt://book/e2a3545e-e9cb-5828-9d97-50a798a0e4f6',
        contributor: 'by Colleen Hoover',
        contributor_note: '',
        created_date: '2023-02-22 23:05:29',
        description:
            'A battered wife raised in a violent home attempts to halt the cycle of abuse.',
        first_chapter_link: '',
        price: '0.00',
        primary_isbn10: '1501110365',
        primary_isbn13: '9781501110368',
        publisher: 'Atria',
        rank: 2,
        rank_last_week: 2,
        sunday_review_link: '',
        title: 'IT ENDS WITH US',
        updated_date: '2023-02-22 23:10:22',
        weeks_on_list: 88,
        buy_links: [
            {
                name: 'Amazon',
                url: 'http://www.amazon.com/Ends-Us-Novel-Colleen-Hoover-ebook/dp/B0176M3U10?tag=NYTBSREV-20',
            },
            {
                name: 'Apple Books',
                url: 'https://goto.applebooks.apple/9781501110368?at=10lIEQ',
            },
            {
                name: 'Barnes and Noble',
                url: 'https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781501110368',
            },
            {
                name: 'Books-A-Million',
                url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FIT%252BENDS%252BWITH%252BUS%252FColleen%252BHoover%252F9781501110368&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DIT%252BENDS%252BWITH%252BUS%252BColleen%252BHoover',
            },
            {
                name: 'Bookshop',
                url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9781501110368&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DIT%2BENDS%2BWITH%2BUS',
            },
            {
                name: 'IndieBound',
                url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9781501110368%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DIT%2BENDS%2BWITH%2BUS%2BColleen%2BHoover%26aff%3DNYT',
            },
        ],
    },
    {
        age_group: '',
        amazon_product_url:
            'https://www.amazon.com/dp/1668021919?tag=NYTBSREV-20',
        article_chapter_link: '',
        author: 'Colleen Hoover',
        book_image:
            'https://storage.googleapis.com/du-prd/books/images/9781668021910.jpg',
        book_image_width: 321,
        book_image_height: 500,
        book_review_link: '',
        book_uri: 'nyt://book/ba793030-cbf3-500c-bf8c-34302c36cc86',
        contributor: 'by Colleen Hoover',
        contributor_note: '',
        created_date: '2023-02-22 23:05:29',
        description:
            'After an unexpected death prevents her from going to Penn State and and forces her to move in with her absent father, Beyah Grim has a summer fling with the rich guy next door.',
        first_chapter_link: '',
        price: '0.00',
        primary_isbn10: '1668021919',
        primary_isbn13: '9781668021910',
        publisher: 'Atria',
        rank: 3,
        rank_last_week: 4,
        sunday_review_link: '',
        title: 'HEART BONES',
        updated_date: '2023-02-22 23:10:22',
        weeks_on_list: 3,
        buy_links: [
            {
                name: 'Amazon',
                url: 'https://www.amazon.com/dp/1668021919?tag=NYTBSREV-20',
            },
            {
                name: 'Apple Books',
                url: 'https://goto.applebooks.apple/9781668021910?at=10lIEQ',
            },
            {
                name: 'Barnes and Noble',
                url: 'https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781668021910',
            },
            {
                name: 'Books-A-Million',
                url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FHEART%252BBONES%252FColleen%252BHoover%252F9781668021910&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DHEART%252BBONES%252BColleen%252BHoover',
            },
            {
                name: 'Bookshop',
                url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9781668021910&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DHEART%2BBONES',
            },
            {
                name: 'IndieBound',
                url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9781668021910%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DHEART%2BBONES%2BColleen%2BHoover%26aff%3DNYT',
            },
        ],
    },
]

export default {
    title: 'BooksList',
    component: BooksList,
} as ComponentMeta<typeof BooksList>

const Template: ComponentStory<typeof BooksList> = (args) => (
    <BooksList {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
    name: 'Combined Print and E-Book Fiction',
    children: (
        <>
            <Book book={books[0]} />
            <Book book={books[1]} />
            <Book book={books[2]} />
        </>
    ),
}
