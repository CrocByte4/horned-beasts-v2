function SelectedBeast({ theBeast }) {
  return (
    <div>
      <img src={theBeast.image_url} alt={theBeast.title} />
    </div>
  );
}
export default SelectedBeast;
