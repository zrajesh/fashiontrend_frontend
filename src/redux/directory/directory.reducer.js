const INITIAL_STATE = {
    sections: [
        {
            title: 'men',
            imageUrl: 'https://images.pexels.com/photos/1036627/pexels-photo-1036627.jpeg',
            size: 'large',
            id: 4,
            linkUrl: 'shop/men'
        },
        {
            title: 'women',
            imageUrl: 'https://images.pexels.com/photos/3756768/pexels-photo-3756768.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
            size: 'large',
            id: 3,
            linkUrl: 'shop/women'
        },
        {
          title: 'accessories',
          imageUrl: 'https://cdn.pixabay.com/photo/2014/05/03/00/46/gadgets-336635_960_720.jpg',
          id: 2,
          linkUrl: 'shop/accessories'
        },
        {
            title: 'winter store',
            imageUrl: 'https://image.freepik.com/free-photo/hangers-with-stylish-sweatshirts_185193-22881.jpg',
            id: 1,
            linkUrl: 'shop/winterstore'
        }
    ]
} 

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        default:
            return state;
    }
}

export default directoryReducer;
