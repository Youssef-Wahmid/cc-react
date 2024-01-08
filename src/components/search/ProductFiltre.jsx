export default function ProductFiltre({ prds }) {
  return (
    <tr>
      <td>{prds.id} </td>
      <td> {prds.title} </td>
      <td>{prds.price} </td>
      <td>
        <img src={prds.image} width="70px" height="100px" alt="" />
      </td>
      <td className="text-center">
        <a
          class="btn btn-outline-success my-4"
          href={`/detail/${prds.id}`}
          role="button"
        >
          Details
        </a>
      </td>
    </tr>
  );
}
