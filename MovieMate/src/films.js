import v4 from 'uuid/v4';
export default [
    {
        id: v4(),
        filmName: "Kosya",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et commodi eum incidunt culpa ipsa laudantium nisi quos dicta debitis. Ab iure deleniti     modi   id culpa, debitis ad aperiam? Harum cupiditate doloremque earum voluptates repudiandae officiis quibusdam repellat error reiciendis. Ipsum explicabo   inventore dicta consequuntur praesentium excepturi, distinctio mollitia temporibus molestias.",
        genre: {
            Action: true,
            Comedy: false,
            Fight: true
        },
        rating: 4
    },
    {
        id: v4(),
        filmName: "Irina",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et commodi eum incidunt culpa ipsa laudantium nisi quos dicta debitis. Ab iure deleniti     modi   id culpa, debitis ad aperiam? Harum cupiditate doloremque earum voluptates repudiandae officiis quibusdam repellat error reiciendis. Ipsum explicabo.",
        genre: {
            Action: false,
            Comedy: true,
            Fight: true
        },
        rating: 10
    },
    {
        id: v4(),
        filmName: "Aleksey",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et commodi eum incidunt culpa ipsa laudantium nisi quos dicta debitis. Ab iure deleniti     modi   id culpa, debitis ad aperiam? Harum cupiditate doloremque earum voluptates repudiandae officiis",
        genre: {
            Action: true,
            Comedy: true,
            Fight: true
        },
        rating: 8
    },
    {
        id: v4(),
        filmName: "Valya",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et commodi eum incidunt culpa ipsa laudantium nisi quos dicta debitis. Ab iure deleniti     modi   id culpa, debitis ad aperiam? Harum cupiditate doloremque earum voluptates repudiandae officiis",
        genre: {
            Action: true,
            Comedy: true,
            Fight: true
        },
        rating: 5
    }
]
