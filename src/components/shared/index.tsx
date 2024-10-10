import dynamic from 'next/dynamic';
import ActiveFilters from './ActiveFilters';
import AddArticle from './AddArticle';
import AddComics from './AddComics';
import ArrowLink from './ArrowLink';
import BackLink from './BackLink';
import Filter from './Filter';
import Filters from './Filters';
import ProfileFilters from './ProfileFilters';
import SearchFilter from './SearchFilter';
import ShowMore from './ShowMore';
import SocialAuthLinks from './SocialAuthLinks';
import SortFilter from './SortFilter';
import Stats from './Stats';

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
  ActiveFilters,
  AddArticle,
  AddComics,
  AdminTextEditor,
  ArrowLink,
  ArticleView,
  BackLink,
  Filter,
  Filters,
  ProfileFilters,
  SearchFilter,
  ShowMore,
  SocialAuthLinks,
  SortFilter,
  Stats,
  TextEditor,
};
