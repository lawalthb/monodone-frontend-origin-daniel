import Pagination from 'react-bootstrap/Pagination';

function PaginationComp(props) {
    return (
        <Pagination style={{ display: "flex", justifyContent: 'space-between', gap: "5px" }}>
            <Pagination.Prev />
            <Pagination.Item>{1}</Pagination.Item>
            <Pagination.Ellipsis />

            <Pagination.Item>{4}</Pagination.Item>
            <Pagination.Item>{5}</Pagination.Item>
            <Pagination.Item>{6}</Pagination.Item>
            <Pagination.Item>{7}</Pagination.Item>
            <Pagination.Item>{8}</Pagination.Item>
            <Pagination.Ellipsis />
            <Pagination.Item >{10}</Pagination.Item>

            <Pagination.Next />
        </Pagination>
    );
}

export default PaginationComp;