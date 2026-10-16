const app = require('./src/app');

const PORT = process.env.PORT || 5004;
app.listen(PORT, () => {
  console.log('====================================================');
  console.log(` Practical 12 CI/CD Server running on port ${PORT}`);
  console.log(' Student: Ghoniya Dhyey (24CS024) | ITUE301 AWDF');
  console.log(' GitHub Actions CI Pipeline: Active');
  console.log('====================================================');
});