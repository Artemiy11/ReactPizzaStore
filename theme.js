import {Dimensions, PixelRatio, Platform} from 'react-native';

const mockupWidth = 414;
const windowSize = Dimensions.get('window');

const PT = windowSize.width / mockupWidth;
const slopD = PT * 15;
class Theme {
  /**
   * Point size in design document
   */
  pt = PT;

  /**
   * Window width
   */
  windowWidth = windowSize.width;

  /**
   * Window heigth
   */
  windowHeight = windowSize.height;

  /**
   *  Space sizes
   */
  space5 = this.aligned(5);
  space8 = this.aligned(8);
  space10 = this.aligned(10);
  space12 = this.aligned(12);
  space14 = this.aligned(14);
  space16 = this.aligned(16);
  space18 = this.aligned(18);
  space20 = this.aligned(20);
  space22 = this.aligned(22);
  space24 = this.aligned(24);
  space28 = this.aligned(28);
  space30 = this.aligned(30);
  space32 = this.aligned(32);
  space36 = this.aligned(36);
  space40 = this.aligned(40);
  space44 = this.aligned(44);
  space45 = this.aligned(45);
  space50 = this.aligned(50);
  space60 = this.aligned(60);
  space70 = this.aligned(70);
  space100 = this.aligned(100);
  space120 = this.aligned(120);

  /**
   *  Font sizes
   */
  fontSize12 = this.pt * 12;
  fontSize13 = this.pt * 13;
  fontSize14 = this.pt * 14;
  fontSize15 = this.pt * 15;
  fontSize16 = this.pt * 16;
  fontSize17 = this.pt * 17;
  fontSize18 = this.pt * 18;
  fontSize20 = this.pt * 20;
  fontSize22 = this.pt * 22;
  fontSize24 = this.pt * 24;
  fontSize25 = this.pt * 25;
  fontSize28 = this.pt * 28;
  fontSize30 = this.pt * 30;
  fontSize32 = this.pt * 32;
  fontSize36 = this.pt * 36;

  /**
   *  Function for more simpler convert from size in points to size in pixels
   */
  aligned(pt) {
    // return (this.windowHeight * pt) / 80;
    return PixelRatio.roundToNearestPixel(this.pt * pt);
  }

  fluidSpace(px) {
    return (theme.windowHeight * px) / 1000;
  }

  rubikLight = Platform.OS ? 'Rubik-Light' : 'RubikLight'; // 300
  rubikRegular = Platform.OS ? 'Rubik-Regular' : 'RubikRegular'; // 400
  rubikMedium = Platform.OS ? 'Rubik-Medium' : 'RubikMedium'; // 500
  rubikSemiBold = Platform.OS ? 'Rubik-SemiBold' : 'RubikSemiBold'; // 600
  rubikBold = Platform.OS ? 'Rubik-Bold' : 'RubikBold'; // 700
  rubikBlack = Platform.OS ? 'Rubik-Black' : 'RubikBlack'; //900
}

const theme = new Theme();

export default theme;
