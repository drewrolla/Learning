print "What's your first name? "
first_name = gets.chomp
first_name2 = first_name.capitalize!
print "What's your last name? "
last_name = gets.chomp
last_name2 = last_name.capitalize!
print "What city are you from? "
city = gets.chomp
city2 = city.capitalize!
print "What state or province are you from? "
state = gets.chomp
state2 = state.upcase!

print "Your name is #{first_name} #{last_name} and you are from #{city}, #{state}!"