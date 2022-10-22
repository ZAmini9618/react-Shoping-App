import { createContext, useState } from 'react'
import { useEffect } from 'react';
export const DataContext = createContext();

export const DataProvider = (props) => {
    const [products, setProducts] = useState([
        {
            _id: 1,
            images: '/img/marble-cake-swirls.jpg',
            title: 'کیک مرمر',
            category: 'کیک',
            description: 'کیک اسفنجی شکلاتی و وانیلی رنگارنگ که جلوه ای مرمر ایجاد می کند',
            price: 10000,
            stock: 6,
            count: 1,
            createDate: '02.04.2018',
        },
        {
            _id: 2,
            images: '/img/Pink-ombre-pancakes.jpg',
            title: 'راسکال چاق',
            category: 'کاپ کیک',
            description: 'چیزکیک با کوکی های شکلاتی و بیسکویت های خامه ای',
            price: 35000,
            stock: 48,
            count: 1,
            createDate: '01.04.2018',
        },
        {
            _id: 3,
            images: '/img/GettyImages.jpg',
            title: 'کیک شکلاتی',
            category: 'کیک',
            description: 'نوعی کیک است که با شکلات آب شده یا پودر کاکائو یا هر دو آنها طعم داده می‌شود ',
            price: 20000,
            stock: 57,
            count: 1,
            createDate: '25.03.2018',
        },
        {
            _id: 4,
            title: ' دانمارکی',
            images: '/img/shirini-danmarki.jpg',
            category: 'کیک',
            description: 'نوعی شیرینی خشک یا نان شیرین است که در تهیه آن از مخمر نان استفاده میشود',
            price: 52500,
            stock: 41,
            count: 1,
            createDate: '21.03.2018',
        },
        {
            _id: 5,
            images: '/img/petit_gateau.jpg',
            title: 'پتی گاتو',
            category: 'کاپ کیک',
            description: 'کیک شکلاتی کوچک با پوست ترد و فیلینگ خامه ای تشکیل شده است',
            sales: 985,
            price: 34000,
            stock: 23,
            count: 1,
            createDate: '02.06.2018',
        },
        {
            _id: 6,
            images: '/img/Salzburger_Nockerln.jpg',
            title: 'سوفله شیرین',
            category: 'دسر',
            description: 'این دسر سبک و پف دار از شهر موتزارت می آید',
            price: 63850,
            stock: 34,
            count: 1,
            createDate: '14.07.2018',
        },
        {
            _id: 7,
            images: '/img/napeloni.jpeg',
            title: ' ناپلئونی',
            category: 'دسر',
            description: 'نوعی پای یا شیرینی سه لایه با منشأ و تاریخچه فرانسوی است.',
            price: 26000,
            stock: 31,
            count: 1,
            createDate: '05.02.2018',
        },
        {
            _id: 8,
            images: '/img/Berry-cheesecakel.jpg',
            title: 'چیزکیک',
            category: 'کیک',
            description: '  دسر شیرین است که از یک یا چند لایه با پنیر نرم و تازه تشکیل شده ',
            price: 29000,
            stock: 21,
            count: 1,
            createDate: '18.08.2018',
        },
        {
            _id: 9,
            title: 'سرمایه‌دار',
            images: '/img/financiers.jpg',
            category: 'کیک',
            description:
                'یک کیک بادام کوچک فرانسوی است معمولاً در قالب کوچکی پخته می‌شود',
            price: 15500,
            stock: 53,
            count: 1,
            createDate: '15.03.2018',
        },
        {
            _id: 10,
            images: '/img/jenva.jpg',
            title: 'نان جنوا',
            category: 'کاپ کیک',
            description: 'یک کیک اسفنجی ایتالیایی است که نام آن از شهر جنوا گرفته شده  ',
            price: 22000,
            stock: 55,
            count: 1,
            createDate: '11.06.2018',
        },
        {
            _id: 11,
            images: '/img/Ginger-cookies.jpg',
            category: 'کیک',
            title: 'نان زنجبیلی',
            description: 'یکی از گونه شیرینی، بیسکویت و کیک است. منشأ آن کشور انگلستان بوده‌است',
            price: 32000,
            stock: 12,
            count: 1,
            createDate: '10.04.2018',
        },
        {
            _id: 12,
            images: '/img/muffins.jpg',
            title: 'مافین',
            category: 'کیک',
            description: 'نوعی نان کم شیرین است و در اندازه‌های کوچک تهیه می‌شود. ',
            price: 12000,
            stock: 14,
            count: 1,
            createDate: '22.07.2018',
        },
        {
            _id: 13,
            images: '/img/parkin.jpg',
            title: 'پارکین',
            category: 'کیک',
            description:
                'شیرینی زنجبیلی است که به‌طور سنتی با بلغور جو دوسر و ملاس تهیه می‌شود',
            price: 24000,
            stock: 78,
            count: 1,
            createDate: '22.08.2018',

        },
        {
            _id: 14,
            images: '/img/streuselkuchen-teaser.jpg',
            title: 'کیک خرده‌دار',
            category: 'کیک',
            description: 'یکی است که از خمیر مخمر پوشانده شده با رویه‌ی خرده‌ای شیرین.',
            price: 17000,
            stock: 55,
            count: 1,
            createDate: '22.07.2018',
        },
        {
            _id: 15,
            images: '/img/tea-loaf.jpg',
            title: 'نان چای',
            category: 'کیک',
            description: 'نان چای با میوه های خشک تهیه می شود و با کره پخش می شود',
            price: 34000,
            stock: 20,
            count: 1,
            createDate: '10.09.2018',
        },
        {
            _id: 16,
            title: 'کیک شگفت انگیز',
            images: '/img/rs_Merveilleux_16x9.jpg',
            category: 'کیک',
            description: 'خامه فرم گرفته جوش داده شده است و با تراشه های شکلات گرد شده است',
            price: 19000,
            stock: 6,
            count: 1,
            createDate: '18.02.2018',
        },
        {
            _id: 17,
            title: 'کیک میوه ای',
            images: '/img/fruitcake.jpg',
            category: 'کیک',
            description: 'کیکی است که با میوه های شیرین یا خشک شده درست می شود ',
            price: 34000,
            stock: 17,
            count: 1,
            createDate: '12.01.2019',
        },
        {
            _id: 18,
            title: 'پودینگ هندی',
            images: '/img/pouding-karameli.jpg',
            category: 'کیک',
            description: ' یک کیک سنتی لایه ای در گوا، هند است که از غذاهای هند و پرتغالی گرفته شده است',
            price: 30000,
            stock: 16,
            count: 1,
            createDate: '04.02.2019',
        },
        {
            _id: 19,
            title: 'کرمشنیته ',
            images: '/img/recipe.jpg',
            category: 'دسر',
            description: 'یک دسر کیک خامه ای کاستارد و خامه ای است',
            price: 23000,
            stock: 9,
            count: 1,
            createDate: '04.03.2018',
        },
        {
            _id: 20,
            title: 'سوفله ',
            images: '/img/sofle.jpg',
            category: 'کاپ کیک',
            description: 'یک غذای پخته شده بر پایه تخم مرغ است که آن را به عنوان غذا ی دسر شیرین کرد',
            price: 23450,
            stock: 14,
            count: 1,
            createDate: '16.01.2018',
        },
        {
            _id: 21,
            images: '/img/koloche.jpeg',
            title: 'کلوچه',
            category: 'کیک',
            description: 'کلوچه نوعی نان شیرینی است که از آرد گندم، شکر و روغن تهیه می‌شود',
            price: 50000,
            stock: 9,
            count: 1,
            createDate: '07.04.2018',
        },
        {
            _id: 22,
            images: '/img/moist-red-velvet-cupcakes.jpg',
            title: 'کاپ کیک',
            category: 'کاپ کیک',
            description: 'وعی کیک کوچک است که برای یک نفر آماده می‌شود. در قالب مخصوص کاپ کیک  پخته می شود. ',
            price: 48000,
            stock: 48,
            count: 1,
            createDate: '019.05.2018',
        },
        {
            _id: 23,
            images: '/img/dounut.jpg',
            title: 'دونات',
            category: 'کیک',
            description: 'نوعی کیک است که با شکلات آب شده یا پودر کاکائو یا هر دو آنها طعم داده می‌شود ',
            price: 30000,
            stock: 57,
            count: 1,
            createDate: '25.03.2018',
        },
        {
            _id: 24,
            title: ' کیک خامه ای ',
            images: '/img/Cream-Puff-Recipe-.jpg',
            category: 'کیک',
            description: 'ک نوع شیرینی به شکل توپ است که داخل آن از خامهٔ زده شده پر می‌شود',
            price: 32500,
            stock: 41,
            count: 1,
            createDate: '10.03.2018',
        }
    ])

    //* -------cart------- *//

    const [cart, setCart] = useState([])
    const addCart = (id) => {
        const check = cart.every(item => {
            return item._id !== id
        })
        if (check) {
            const data = products.filter(product => {
                return product._id === id
            })
            setCart([...cart, ...data])
        }
    }
    // *-----addFavorite-----*//

    const [Favorite, setFavorite] = useState([])
    const addFavorite = (id) => {
        const check = Favorite.every(item => {
            return item._id !== id
        })
        if (check) {
            const data = products.filter(product => {
                return product._id === id
            })
            setFavorite([...Favorite, ...data])
        }
    }
    const value = {
        products: [products, setProducts],
        cart: [cart, setCart],
        addCart: addCart,
        Favorite: [Favorite, setFavorite],
        addFavorite: addFavorite,
    }
    return (
        <DataContext.Provider value={value}>
            {props.children}
        </DataContext.Provider>

    )
}
