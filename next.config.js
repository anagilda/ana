const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const githubPagesDeployment = process.env.DEPLOYMENT_SOURCE == "githubActions";
const githubPagesURL = process.env.GITHUB_PAGES_URL
const nextConfig = {
  assetPrefix: githubPagesDeployment ? githubPagesURL : '',
};

module.exports = withBundleAnalyzer(nextConfig);
