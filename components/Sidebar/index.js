import FeedTile from '../FeedTile';

import { SectionHeader } from '../Layout';

import { SidebarWrapper } from './styles';

const Sidebar = ({ articles }) => {
  return (
    <SidebarWrapper>
      <SectionHeader>
        <h1>Mais Vistos</h1>
        <ul>
          { articles.map((a) => (
            <FeedTile data={a} key={a.sys.id} noAuthor />
          ))}
        </ul>
      </SectionHeader>
    </SidebarWrapper>
  );
};

export default Sidebar;
