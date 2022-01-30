import { Icon, IconProps } from '@chakra-ui/react';
import {
  faAngleLeft,
  faAngleRight,
  faBiking,
  faCaretDown,
  faCaretUp,
  faChartLine,
  faClock,
  faRunning,
  faStepBackward,
  faStepForward,
  faTachometerAlt,
  faTrophy,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const iconDistance = () => <FontAwesomeIcon icon={faTachometerAlt} />;
const iconDuration = () => <FontAwesomeIcon icon={faClock} />;
const iconElevation = () => <FontAwesomeIcon icon={faChartLine} />;
const bikeIcon = () => <FontAwesomeIcon icon={faBiking} />;
const runIcon = () => <FontAwesomeIcon icon={faRunning} />;
const trophyIcon = () => <FontAwesomeIcon icon={faTrophy} />;
const upIcon = () => <FontAwesomeIcon icon={faCaretUp} />;
const downIcon = () => <FontAwesomeIcon icon={faCaretDown} />;
const lastPageIcon = () => <FontAwesomeIcon icon={faStepForward} />;
const firstPageIcon = () => <FontAwesomeIcon icon={faStepBackward} />;
const prevPageIcon = () => <FontAwesomeIcon icon={faAngleLeft} />;
const nextPageIcon = () => <FontAwesomeIcon icon={faAngleRight} />;

interface Props extends IconProps {}

export function DistanceIcon(props: Props) {
  return <Icon as={iconDistance} {...props} />;
}

export function DurationIcon(props: Props) {
  return <Icon as={iconDuration} {...props} />;
}

export function ElevationIcon(props: Props) {
  return <Icon as={iconElevation} {...props} />;
}

export function BikingIcon(props: Props) {
  return <Icon as={bikeIcon} {...props} />;
}

export function RunningIcon(props: Props) {
  return <Icon as={runIcon} {...props} />;
}

export function TrophyIcon(props: Props) {
  return <Icon as={trophyIcon} {...props} />;
}

export function ArrowUp(props: Props) {
  return <Icon as={upIcon} {...props} />;
}

export function ArrowDown(props: Props) {
  return <Icon as={downIcon} {...props} />;
}

export function FirstPage(props: Props) {
  return <Icon as={firstPageIcon} {...props} />;
}

export function LastPage(props: Props) {
  return <Icon as={lastPageIcon} {...props} />;
}

export function NextPage(props: Props) {
  return <Icon as={nextPageIcon} {...props} />;
}

export function PrevPage(props: Props) {
  return <Icon as={prevPageIcon} {...props} />;
}
