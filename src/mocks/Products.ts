import { IProductCard } from "../types/common/ComponentsProps";

import greenApple from "../assets/pages/products/apple.png"
import mango from "../assets/pages/products/mango.png"
import orange from "../assets/pages/products/orange.png"

export const products: IProductCard[] = [
    {
        image: greenApple as unknown as string,
        receiptDate: "23.10.2024",
        title: "Зелёное яблоко",
        descriptionProduct: "Именно яблоко — один из кандидатов на роль запретного плода из Эдемского сада. Согласно греческой мифологии, Геракл сорвал три золотых яблока с Древа Жизни в саду титана Атласа, и это был 12-ый подвиг героя. Падающее яблоко вдохновило сэра Исаака Ньютона на закон всемирного тяготения, а Стив Джобс и Стив Возняк выбрали его логотипом своей инновационной компании. От искусства до науки, от политики до религии яблоко постоянно участвует в нашей жизни.",
        id: "1",
    },
    {
        image: mango as unknown as string,
        receiptDate: "24.10.2024",
        title: "Манго",
        descriptionProduct: "Плоды манго подходит для людей всех возрастов: для беременных, спортсменов, выздоравливающих и худеющих, для курильщиков и гипертоников. Это очень питательный фрукт, который богат витаминами, клетчаткой и минералами. Плод манго весом примерно 200 грамм обеспечивает полностью суточную потребность организма человека в витамине С, а также треть суточной нормы витамина А и одну четвертую – витамина Е. Кроме этих витаминов в плодах манго содержатся витамины группы В, которые нужны для правильной работы нервной системы и для красоты кожи и волос. Манго полезно употреблять беременным женщинам, потому что в нем содержится фолиевая кислота, необходимая для правильного развития ребенка.",
        id: "2",
    },
    {
        image: orange as unknown as string,
        receiptDate: "25.10.2024",
        title: "Апельсин",
        descriptionProduct: "Апельсин – самый известный и распространенный цитрус. Плоды вырастают на вечнозеленом дереве. Цветы апельсина крупные, приятно пахнущие, их собирают для чая или саше. По некоторым предположениям ботаников, апельсин может являться гибридом помело и мандарина. Апельсин крайне полезен при авитаминозе, поскольку содержит множество витаминов в высокой концентрации: С, А, Е, витамины группы В. ",
        id: "3",
    }
]
