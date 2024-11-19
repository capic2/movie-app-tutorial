interface LoaderProps {
  loaderDescription: string;
}

export const Loader = ({ loaderDescription }: LoaderProps) => {
  return (
    <div className="flex justify-center">
      <p id="loader-text">{loaderDescription}</p>
    </div>
  );
};

export default Loader;
