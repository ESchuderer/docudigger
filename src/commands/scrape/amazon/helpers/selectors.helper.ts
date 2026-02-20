import { AmazonSelectors } from "../../../../interfaces/selectors.interface";

export const amazonSelectors: AmazonSelectors = {
  orderCards: `div.order-card.js-order-card`,
  invoiceSpans: `li.yohtmlc-order-level-connections span.a-declarative[data-action="a-popover"]`,
  orderNr: `.yohtmlc-order-id span:nth-last-child(1)`,
  orderDate: `.a-column .a-row:nth-last-child(1) span`,
  orderStatus: `div.yohtmlc-shipment-status-primaryText span`,
  popover: `.a-popover:not(.a-popover-hidden) .a-popover-inner`,
  invoiceList: `ul.invoice-list`,
  invoiceLinks: `a[href*="invoice"]`,
  pagination: `ul.a-pagination li.a-normal:nth-last-child(2) a`,
  yearFilter: `select[name='timeFilter']#time-filter`,
  authError: `#auth-error-message-box .a-unordered-list li`,
  authWarning: `#auth-warning-message-box .a-unordered-list li`,
  // captchaImage: `div.cvf-captcha-img img[alt~="captcha"]`,
  captchaPage: "form.cvf-widget-form-captcha"
};
