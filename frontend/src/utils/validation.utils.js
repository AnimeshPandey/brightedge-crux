// Regex pattern for validating HTTP/HTTPS URLs
const URL_REGEX = /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)$/;

export function isValidUrl(url) {
  if (!url || typeof url !== 'string') {
    return false;
  }

  const trimmedUrl = url.trim();

  if (trimmedUrl.length === 0) {
    return false;
  }

  // Validate using both URL constructor and regex for comprehensive validation
  try {
    new URL(trimmedUrl);
    return URL_REGEX.test(trimmedUrl);
  } catch {
    return false;
  }
}

export function validateUrls(urlString) {
  if (!urlString || typeof urlString !== 'string') {
    return {
      valid: false,
      errors: ['Please enter at least one URL'],
      validUrls: [],
      invalidUrls: [],
    };
  }

  const urls = urlString
    .split('\n')
    .map(url => url.trim())
    .filter(url => url.length > 0);

  if (urls.length === 0) {
    return {
      valid: false,
      errors: ['Please enter at least one URL'],
      validUrls: [],
      invalidUrls: [],
    };
  }

  const validUrls = [];
  const invalidUrls = [];
  const errors = [];

  urls.forEach((url, index) => {
    if (isValidUrl(url)) {
      validUrls.push(url);
    } else {
      invalidUrls.push({ url, line: index + 1 });
      errors.push(`Line ${index + 1}: "${url}" is not a valid URL`);
    }
  });

  return {
    valid: invalidUrls.length === 0,
    errors,
    validUrls,
    invalidUrls,
  };
}

export function getUrlValidationMessage(validation) {
  if (validation.valid) {
    return '';
  }

  if (validation.invalidUrls.length === 1) {
    return validation.errors[0];
  }

  return `${validation.invalidUrls.length} invalid URL(s) found. Please check and correct them.`;
}

