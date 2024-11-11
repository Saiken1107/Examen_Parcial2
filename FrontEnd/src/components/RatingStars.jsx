
function RatingStars({ rating }) {
    const renderStars = (rating) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
            <span key={i} style={{ color: i <= rating ? '#FFD700' : '#ddd' }}>
                ★
            </span>
            );
        }
        return stars;
    };

    return (
        <div className="mb-3">
            {renderStars(Math.round(rating))}
        </div>
    );
}

export default RatingStars;