(() => {
  const init = () => {
    const phoneItem = document.querySelector('.resume-top aside ul li:nth-child(1)');
    const emailItem = document.querySelector('.resume-top aside ul li:nth-child(2)');
    if (!phoneItem || !emailItem || emailItem.dataset.copyReady) return;
    const style = document.createElement('style');
    style.textContent = '.resume-top aside ul li:nth-child(1),.resume-top aside ul li:nth-child(2){cursor:url("data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2232%22 height=%2232%22 viewBox=%220 0 32 32%22%3E%3Cpath d=%22M4 3v20l5-5 4 9 4-2-4-9h7z%22 fill=%22white%22 stroke=%22%23171a1b%22 stroke-width=%221.7%22 stroke-linejoin=%22round%22/%3E%3Crect x=%2219%22 y=%2215%22 width=%229%22 height=%2211%22 rx=%221.5%22 fill=%22white%22 stroke=%22%23076571%22 stroke-width=%221.6%22/%3E%3Crect x=%2216%22 y=%2218%22 width=%229%22 height=%2210%22 rx=%221.5%22 fill=%22white%22 stroke=%22%23076571%22 stroke-width=%221.6%22/%3E%3C/svg%3E") 4 3,auto;border-radius:3px;transition:color .18s ease,background-color .18s ease}.resume-top aside ul li:nth-child(1):hover,.resume-top aside ul li:nth-child(1):focus-visible,.resume-top aside ul li:nth-child(2):hover,.resume-top aside ul li:nth-child(2):focus-visible{color:#076571;background:rgba(7,101,113,.07);outline:none}.copy-notice{position:fixed;z-index:1000;left:50%;bottom:32px;transform:translate(-50%,12px);padding:10px 15px;border-radius:4px;background:#171a1b;color:#fff;font-size:14px;line-height:1;opacity:0;transition:opacity .18s ease,transform .18s ease;pointer-events:none}.copy-notice.show{opacity:1;transform:translate(-50%,0)}';
    document.head.append(style);
    emailItem.dataset.copyReady = 'true';
    phoneItem.dataset.copyReady = 'true';

    const showNotice = () => {
      const previous = document.querySelector('.copy-notice');
      if (previous) previous.remove();
      const notice = document.createElement('div');
      notice.className = 'copy-notice';
      notice.textContent = '已经复制';
      notice.setAttribute('role', 'status');
      document.body.append(notice);
      requestAnimationFrame(() => notice.classList.add('show'));
      setTimeout(() => {
        notice.classList.remove('show');
        setTimeout(() => notice.remove(), 180);
      }, 1500);
    };

    const copy = async value => {
      try {
        if (navigator.clipboard && window.isSecureContext) {
          await navigator.clipboard.writeText(value);
        } else {
          const input = document.createElement('textarea');
          input.value = value;
          input.setAttribute('readonly', '');
          input.style.cssText = 'position:fixed;opacity:0;pointer-events:none';
          document.body.append(input);
          input.select();
          document.execCommand('copy');
          input.remove();
        }
        showNotice();
      } catch (_) {}
    };

    const bindCopy = (item, value, label) => {
      item.setAttribute('role', 'button');
      item.setAttribute('tabindex', '0');
      item.setAttribute('aria-label', label);
      item.addEventListener('click', () => copy(value));
      item.addEventListener('keydown', event => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          copy(value);
        }
      });
    };
    bindCopy(phoneItem, '18251966158', '复制电话号码');
    bindCopy(emailItem, 'chenqw07@foxmail.com', '复制邮箱地址');
  };

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
