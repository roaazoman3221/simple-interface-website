import "./Card.css"



function Card() {
    const cards = [
    {
        image: '/images/img1.jpg',
        writer: "Alec Whitten • 1 Jan 2023",
        title: "Bill Walsh leadership lessons",
        desc: "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?"
        },
        {
        image: '/images/img2.jpg',
        writer: "Demi WIlkinson • 1 Jan 2023",
        title: "PM mental models",
        desc: "Mental models are simple expressions of complex processes or relationships."
        },
        {
        image: '/images/img3.jpg',
        writer: "Candice Wu • 1 Jan 2023",
        title: "What is Wireframing?",
        desc: "Introduction to Wireframing and its Principles. Learn from the best in the industry."
        },
        {
        image: '/images/img4.jpg',
        writer: "Natali Craig • 1 Jan 2023",
        title: "How collaboration makes us better designers",
        desc: "Collaboration can make our teams stronger, and our individual designs better."
        },
        {
        image: '/images/img5.jpg',
        writer: "Drew Cano • 1 Jan 2023",
        title: "Our top 10 Javascript frameworks to use",
        desc: "JavaScript frameworks make development easy with extensive features and functionalities."
        },
        {
        image: '/images/img6.jpg',
        writer: "Orlando Diggs • 1 Jan 2023",
        title: "Podcast: Creating a better CX Community",
        desc: "Starting a community doesn’t need to be complicated, but how do you get started?"
        }
    ]
    return (
        <div className="container">
            <h1>All Blog Posts</h1>
            <div className="cards-container">
                {cards?.map((card, index) => (
                    <div className="card" key={index}>
                        <img src={card?.image} alt="card image" className="card-img"/>
                        <div className="card-content">
                            <p className="card-writer">{card?.writer}</p>
                            <h3 className="card-title">{card?.title} <button><i className="fa-solid fa-arrow-up-right-from-square"></i></button></h3>
                            <p className="card-desc">{card?.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Card
