import mongoose from 'mongoose';

const CompanySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
  },
  Location: {
    type: String,
  },
  link: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
  },
  accountType: {
    type: String,
    enum: ['individaul', 'company'],
    default: 'company',
  },
  verified: {
    type: Boolean,
    default: false,
  },
  imageUrl: {
    type: String,
    default: 'http://lorempixel.com/100/100/people/'
  },
},
{
  timestamps: true
});

const Company = mongoose.model('Company', CompanySchema);
module.exports = Company;
