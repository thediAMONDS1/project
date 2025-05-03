export function Video() {
  return (
    <>
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
      >
        <source src="/background.mp4" type="video/mp4" />
      </video>
      ;
    </>
  );
}
