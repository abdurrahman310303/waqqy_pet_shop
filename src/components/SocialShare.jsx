import React, { useState } from 'react';
import { Icon } from '@iconify/react';

const SocialShare = ({ url, title, description, image }) => {
  const [copied, setCopied] = useState(false);

  const shareUrl = url || window.location.href;
  const shareTitle = title || 'Check out this amazing pet product!';
  const shareDescription = description || 'Found something great at Waggy Pet Shop';
  const shareImage = image || 'images/logo.png';

  const socialLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
    pinterest: `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(shareUrl)}&description=${encodeURIComponent(shareDescription)}&media=${encodeURIComponent(shareImage)}`,
    whatsapp: `https://wa.me/?text=${encodeURIComponent(shareTitle + ' ' + shareUrl)}`,
    email: `mailto:?subject=${encodeURIComponent(shareTitle)}&body=${encodeURIComponent(shareDescription + ' ' + shareUrl)}`
  };

  const handleShare = (platform) => {
    const url = socialLinks[platform];
    if (platform === 'email') {
      window.location.href = url;
    } else {
      window.open(url, '_blank', 'width=600,height=400,scrollbars=yes,resizable=yes');
    }
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: shareTitle,
          text: shareDescription,
          url: shareUrl,
        });
      } catch (err) {
        console.error('Error sharing:', err);
      }
    }
  };

  return (
    <div className="social-share">
      <h6 className="mb-3">
        <Icon icon="mdi:share" className="me-2 text-primary" />
        Share with Friends
      </h6>
      
      <div className="d-flex flex-wrap gap-2">
        <button
          className="btn btn-outline-primary btn-sm"
          onClick={() => handleShare('facebook')}
          title="Share on Facebook"
        >
          <Icon icon="mdi:facebook" className="me-1" />
          Facebook
        </button>
        
        <button
          className="btn btn-outline-info btn-sm"
          onClick={() => handleShare('twitter')}
          title="Share on Twitter"
        >
          <Icon icon="mdi:twitter" className="me-1" />
          Twitter
        </button>
        
        <button
          className="btn btn-outline-primary btn-sm"
          onClick={() => handleShare('linkedin')}
          title="Share on LinkedIn"
        >
          <Icon icon="mdi:linkedin" className="me-1" />
          LinkedIn
        </button>
        
        <button
          className="btn btn-outline-danger btn-sm"
          onClick={() => handleShare('pinterest')}
          title="Share on Pinterest"
        >
          <Icon icon="mdi:pinterest" className="me-1" />
          Pinterest
        </button>
        
        <button
          className="btn btn-outline-success btn-sm"
          onClick={() => handleShare('whatsapp')}
          title="Share on WhatsApp"
        >
          <Icon icon="mdi:whatsapp" className="me-1" />
          WhatsApp
        </button>
        
        <button
          className="btn btn-outline-secondary btn-sm"
          onClick={() => handleShare('email')}
          title="Share via Email"
        >
          <Icon icon="mdi:email" className="me-1" />
          Email
        </button>
      </div>
      
      <div className="mt-3">
        <div className="input-group">
          <input
            type="text"
            className="form-control form-control-sm"
            value={shareUrl}
            readOnly
          />
          <button
            className={`btn btn-outline-secondary btn-sm ${copied ? 'btn-success' : ''}`}
            type="button"
            onClick={copyToClipboard}
          >
            <Icon icon={copied ? "mdi:check" : "mdi:content-copy"} className="me-1" />
            {copied ? 'Copied!' : 'Copy'}
          </button>
        </div>
      </div>
      
      {navigator.share && (
        <div className="mt-2">
          <button
            className="btn btn-primary btn-sm"
            onClick={handleNativeShare}
          >
            <Icon icon="mdi:share" className="me-1" />
            Share
          </button>
        </div>
      )}
    </div>
  );
};

// Compact version for product cards
export const SocialShareCompact = ({ url, title }) => {
  const shareUrl = url || window.location.href;
  const shareTitle = title || 'Check out this pet product!';

  const handleShare = (platform) => {
    const links = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`,
      whatsapp: `https://wa.me/?text=${encodeURIComponent(shareTitle + ' ' + shareUrl)}`
    };
    
    window.open(links[platform], '_blank', 'width=600,height=400');
  };

  return (
    <div className="dropdown">
      <button
        className="btn btn-outline-secondary btn-sm dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
      >
        <Icon icon="mdi:share-variant" />
      </button>
      <ul className="dropdown-menu">
        <li>
          <button
            className="dropdown-item"
            onClick={() => handleShare('facebook')}
          >
            <Icon icon="mdi:facebook" className="me-2 text-primary" />
            Facebook
          </button>
        </li>
        <li>
          <button
            className="dropdown-item"
            onClick={() => handleShare('twitter')}
          >
            <Icon icon="mdi:twitter" className="me-2 text-info" />
            Twitter
          </button>
        </li>
        <li>
          <button
            className="dropdown-item"
            onClick={() => handleShare('whatsapp')}
          >
            <Icon icon="mdi:whatsapp" className="me-2 text-success" />
            WhatsApp
          </button>
        </li>
      </ul>
    </div>
  );
};

export default SocialShare;
