import BackLink from './BackLink';
import SocialAuthLinks from './SocialAuthLinks';
import ArrowLink from './ArrowLink';
import Stats from './Stats';
import Filters from './Filters';
import SearchFilter from './SearchFilter';
import Filter from './Filter';
import SortFilter from './SortFilter';
import ActiveFilters from './ActiveFilters';
import ShowMore from './ShowMore';
import AddComics from './AddComics';
import AddArticle from './AddArticle';
import dynamic from 'next/dynamic';

const TextEditor = dynamic(() => import('./TextEditor'), {
  ssr: false,
});
const AdminTextEditor = dynamic(() => import('./AdminTextEditor'), {
  ssr: false,
});

const ArticleView = dynamic(() => import('./ArticleView'), {
  ssr: false,
});

export {
  ArticleView,
  TextEditor,
  AdminTextEditor,
  BackLink,
  SocialAuthLinks,
  ArrowLink,
  Stats,
  Filters,
  SearchFilter,
  SortFilter,
  Filter,
  ActiveFilters,
  ShowMore,
  AddComics,
  AddArticle,
};
