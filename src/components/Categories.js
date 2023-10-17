
const categories = [
    { name: 'all', text: '전체보기' },
    { name: 'business', text: '비즈니스' },
    { name: 'entertainment', text: '엔터테인먼트' },
    { name: 'health', text: '건강' },
    { name: 'science', text: '과학' },
    { name: 'sports', text: '스포츠' },
    { name: 'technology', text: '기술' },
];

function Categories() {

    return (
        <>{
            categories.map((value, i) => {
                return <a href={value.name} key={i}>{value.text}</a>
            })
        }

        </>
    );
};

export default Categories;