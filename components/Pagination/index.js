import Link from 'next/link';
import { useRouter } from 'next/router';

import { Wrapper } from './styles';

const Pagination = ({ page, total }) => {
  const router = useRouter();
  const nextPage =`?page=${parseInt(page ? page : 0) + 1}`;
  const prevPage = page == 1 ? router.pathname : `?page=${parseInt(page) - 1}`;
  return (
    <Wrapper>
      { (page >= 0 || page !== undefined) && <li><Link href={prevPage}><a>Anterior</a></Link></li>}
      { total > 12 && <li><Link href={nextPage}><a>Próxima</a></Link></li>}
    </Wrapper>
  );
}

export default Pagination;
