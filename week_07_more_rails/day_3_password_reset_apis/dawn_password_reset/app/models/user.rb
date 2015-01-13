class User < ActiveRecord::Base

  has_secure_password

  validates :email, presence: true, uniqueness: {case_sensitive: false}
  # validates :password, length: {minimum: 3}, on: :create

  def set_password_reset
    self.code = SecureRandom.urlsafe_base64
    self.expires_at = 4.hours.from_now
    self.save!
  end



  def self.authenticate email, password
    User.find_by_email(email).try(:authenticate,password)
  end


end
