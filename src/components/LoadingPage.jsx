import React from 'react'

function LoadingPage() {
  return (
    <>
      <div className="preloader">
        <span className="percent v-middle">0</span>
        <span className="loading-text text-uppercase">Loading ...</span>
        <div className="preloader-bar">
          <div className="preloader-progress" />
        </div>
        <h1 className="title v-middle">
          <span className="letter-stroke">2twelve</span>
          <span className="text-fill">2twelve</span>
        </h1>
      </div>

    </>
  )
}

export default LoadingPage