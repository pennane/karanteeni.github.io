const RickRoll = () => {
    return (
        <iframe
            style={{ position: 'fixed', inset: 0, width: '100vw', height: '100vh' }}
            src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&controls=0"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
        ></iframe>
    )
}

export default RickRoll
